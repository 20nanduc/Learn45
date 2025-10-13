export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  // Constants for thresholds
  const MINUTE = 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const WEEK = DAY * 7;

  // Use Intl.RelativeTimeFormat for all relative time units
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  // 1. Just Now (0-9 seconds)
  if (diffInSeconds < 10) {
    return "just now";
  }

  // 2. Relative Time (Up to 6 days)
  if (diffInSeconds < WEEK) {

    // Seconds (10s to 59s)
    if (diffInSeconds < MINUTE) {
      return rtf.format(-diffInSeconds, "second");
    }

    // Minutes (1m to 59m)
    if (diffInSeconds < HOUR) {
      const minutes = Math.floor(diffInSeconds / MINUTE);
      return rtf.format(-minutes, "minute");
    }

    // Hours (1h to 23h)
    if (diffInSeconds < DAY) {
      const hours = Math.floor(diffInSeconds / HOUR);
      return rtf.format(-hours, "hour");
    }

    // Days (1d to 6d)
    // We calculate the actual day difference (ignoring time) to properly handle 'yesterday'.
    const dateAtMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const nowAtMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dayDifference = Math.floor((nowAtMidnight.getTime() - dateAtMidnight.getTime()) / DAY / 1000);

    if (dayDifference === 1) {
      return "yesterday";
    }

    if (dayDifference < 7) {
      // 2 days ago, 3 days ago, etc.
      return rtf.format(-dayDifference, "day");
    }
  }

  // 3. Older Dates (7 days or more)
  const options: Intl.DateTimeFormatOptions = {
    month: "short", // e.g., 'Jul'
    day: "numeric", // e.g., '2'
  };

  // Only include the year if the post is from a previous year.
  if (date.getFullYear() !== now.getFullYear()) {
    options.year = "numeric"; // e.g., '2024'
  }

  // Final format: "Jul 2" or "Jul 2, 2024"
  return date.toLocaleDateString("en-US", options);
}