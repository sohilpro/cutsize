// utils/phoneUtils.ts

/**
 * Converts Persian digits in a string to English digits.
 */
export function convertPersianToEnglish(str: string): string {
 console.log("[convertPersianToEnglish] input:", str);
  
  const persian = "۰۱۲۳۴۵۶۷۸۹";
  const english = "0123456789";
  return str.replace(/[۰-۹]/g, (d) => english[persian.indexOf(d)]);
}

/**
 * Handles input event, converts Persian digits and calls setter.
 */
export function onPersianNumberInput(
  value: string,
  setter: (val: string) => void
): void {
  const converted = convertPersianToEnglish(value);
  setter(converted);
}

/**
 * Handles paste event, prevents default paste, converts Persian digits and calls setter.
 */
export function onPersianNumberPaste(
  event: ClipboardEvent,
  setter: (val: string) => void
): void {
  event.preventDefault();
  const pasted = event.clipboardData?.getData("text") || "";
  const converted = convertPersianToEnglish(pasted);
  setter(converted);
}
