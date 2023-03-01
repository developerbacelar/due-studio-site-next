interface DataLayer {
    event: string;
    page: string;
  }
  
  interface CustomWindow extends Window {
    dataLayer?: DataLayer[];
  }
  
  export const pageview = (url: string): void => {
    const customWindow: CustomWindow = window;
    customWindow.dataLayer = customWindow.dataLayer || [];
    customWindow.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  };
  