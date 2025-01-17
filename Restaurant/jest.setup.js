jest.mock('react-native-webview', () => {
    const MockWebView = jest.requireActual('react-native').View;
  
    return {
      __esModule: true,
      WebView: MockWebView,
      default: MockWebView,
    };
  });