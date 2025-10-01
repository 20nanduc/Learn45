import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { describe } from "node:test";

/*
 * @returns {Promise<string>} A promise that give visitor id.
 */

export const getFingerprint = async () => {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  return result.visitorId;
};
