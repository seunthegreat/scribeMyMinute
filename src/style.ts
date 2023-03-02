interface Styling {
  Text : {
    normal: string;
    small: string;
    smallest: string;
    heading: string;
    subHeading: string;
    body: string;
  },
  layout: {
    sectionItems: string
  }
}

export const layout: Styling['layout'] = {
  sectionItems: "grid md:grid-cols-2 sm:grid-cols-1 w-full",
}
  
export const text: Styling['Text'] = {
  normal: "lg:text-sm xs:text-xs",
  small: "text-xs lg:text-ss",
  smallest: "text-xs lg:text-ss",
  heading: "lg:text-4xl sm:text-xl xs:text-lg",
  subHeading: "lg:text-xl sm:text-ss md:text-ss xs:text-xs text-black font-semibold",
  body: "font-normal text-gray-500 text-xs",
};