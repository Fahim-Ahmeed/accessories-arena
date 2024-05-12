/* eslint-disable react-refresh/only-export-components */
import FAQImage from "../../../assets/faq.png";


const FAQ = () => {
    return (
        <section className="container mx-auto mt-16">
        <div className="text-center  w-3/5 mx-auto">
          <h2 className="text-gray-900 text-4xl">Frequently Asked Any Question</h2>
          <p>
FAQs (Frequently Asked Questions) are a vital part of any website, including Accessory Arena. They serve as a comprehensive guide for visitors, addressing common queries and concerns they might have about the products, services, ordering process, and policies</p>
        </div>
        <div className="grid md:grid-flow-row gap-2 lg:grid-flow-col  md:grid-cols-2 lg:grid-cols-2 mt-8">
          <div className="space-y-4">
            <div className="collapse collapse-plus bg-[#DBDBDB] p-4">
              <input type="radio" name="my-accordion-3" checked="checked" readOnly /> 
              <div className="collapse-title text-xl font-medium text-gray-900">
              Q. What types of electronic items do you offer on Accessory Arena?
              </div>
              <div className="collapse-content text-gray-700"> 
                <p>At Accessory Arena, we offer a wide range of electronic items including computer gaming accessories, computer accessories, phones, and various home space-related items to cater to all your needs. </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-[#DBDBDB] p-4">
              <input type="radio" name="my-accordion-3" checked="checked" readOnly /> 
              <div className="collapse-title text-xl font-medium text-gray-900">
                Q. How can I track my order on Accessory Arena?

              </div>
              <div className="collapse-content text-gray-700"> 
                <p>Tracking your order is easy! Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package through the shipping option of our  website. </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-[#DBDBDB] p-4">
              <input type="radio" name="my-accordion-3" checked="checked" readOnly/> 
              <div className="collapse-title text-xl font-medium text-gray-900">
                Q. What is your return policy?
              </div>
              <div className="collapse-content text-gray-700"> 
                <p>If you are not satisfied with your purchase, you can return or exchange the item within [insert number] days of receiving it. Please visit our Returns & Exchanges page for detailed instructions on how to initiate a return or exchange. . </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-[#DBDBDB] p-4">
              <input type="radio" name="my-accordion-3" checked="checked" readOnly/> 
              <div className="collapse-title text-xl font-medium text-gray-900">
              Q: Are the products on Accessory Arena covered by a warranty?
              </div>
              <div className="collapse-content text-gray-700"> 
                <p> Yes, most of our products come with a manufacturer warranty. The duration and coverage of the warranty may vary depending on the product. You can find warranty information on the product page or contact our customer support team for assistance </p>
              </div>
            </div>
          </div>
          <div>
            <img src={FAQImage} alt="/"/>
          </div>
        </div>
      </section>
    );
};

export default FAQ;