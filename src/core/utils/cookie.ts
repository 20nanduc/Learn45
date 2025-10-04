import { cookies } from "next/headers";
import { COOKIE_SESSION_KEY } from "../constants";


function getMaxAgeFromRaw(raw: string): number | undefined {
    const match = raw.match(/Max-Age=(\d+)/)
    return match ? parseInt(match[1]) : undefined
}

export const saveCookieToBrowser = async (res: Response) => {
    const cookieStore = await cookies();
    const setCookieHeader: string[] = res.headers.getSetCookie()

    if (!setCookieHeader || !Array.isArray(setCookieHeader)) return;

    for (const raw of setCookieHeader) {
        const parts = raw.split(';')[0].split('=');
        const name = parts[0];
        const value = parts[1];

        console.log("cookie name", name);
        cookieStore.set(name, value, {
            path: '/',
            httpOnly: raw.includes('HttpOnly'),
            // domain: "www.me.learn45.com",      // uncomment later for avoid mixup.
            secure: raw.includes('Secure'),
            sameSite: raw.includes('SameSite=Lax') ? 'lax' : (raw.includes('SameSite=Strict') ? 'strict' : 'none'),
            maxAge: getMaxAgeFromRaw(raw),
        });
    }
    return true;
}   



export const getBrowserCookie = async () => {

    const cookieStore = cookies();
    const sessionCookie = (await cookieStore).get(COOKIE_SESSION_KEY)?.value;

    console.log("session cookie", sessionCookie);

    if (!sessionCookie) return null;

    return sessionCookie;

}



