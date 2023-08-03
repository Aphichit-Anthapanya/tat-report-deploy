class WindowConfig {
  static isClient: boolean = !!(
    typeof window !== "undefined" && window.document
  );
}

export default WindowConfig;
