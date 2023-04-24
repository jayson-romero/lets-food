const styles = {
   maxWidth: "xl:max-w-[1180px] w-full m-auto",
   smallWidth: "xl:max-w-[1032px] w-full m-auto",
 
   heading: "font-Readex text-black font-semibold text-[40px] sm:leading-[60px] leading-[50px]",

   sectionHead: "font-Readex font-medium text-primary text-[22px] leading-[28px]",
   sectionTitle: "font-Readex text-black font-bold text-[32px] leading-[40px]",
   paragraph: "font-Readex font-medium text-lightblack text-[22px] leading-[28px]",
 
   flexCenter: "flex justify-center items-center",
   flexStart: "flex justify-center items-start",
 
   paddingX: "px-4 sm:px-16 xl:px-[0px]",
   paddingY: "py-[80px]",
   padding: "px-4 sm:px-16 xl:px-[0px] sm:py-12 py-4",
 
   marginX: "sm:mx-16 mx-6",
   marginY: "sm:my-16 my-6",
 };
 
 export const layout = {
   section: `flex md:flex-row flex-col ${styles.paddingY}`,

   sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
   sectionImgReverse: `flex-1 flex ${styles.flexCenter} `,

   sectionImg: `flex ${styles.flexCenter}`,
   sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
 };
 
 export default styles;