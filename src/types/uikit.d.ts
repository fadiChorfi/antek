declare global {
  interface Window {
    UIkit: {
      slideshow: (
        element: HTMLElement,
        options?: {
          animation?: string;
          autoplay?: boolean;
          autoplayInterval?: number;
          pauseOnHover?: boolean;
          finite?: boolean;
        }
      ) => void;
    };
  }
}

export {};
