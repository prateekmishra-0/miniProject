const Faq = () => {
  return(
    <>
         


{/* <!-- Pop-up Section --> */}
<div id="popup">
  <div id="popupc">
    </div>
    <div id="close">
    <i onclick="hidePopup()" className="fa-solid fa-circle-xmark fa-xl"> Close</i>
  </div>
</div>

{/* <!-- Pop-up Section --> */}

{/* <!-- FAQ Section --> */}

<section id="faq">
    <div className="faq-main">
        <h1>Frequently Asked Questions</h1>
        <hr className="line" />
        <div className="faq-item">
            <div className="faq-question">
                <i className="fa-solid fa-circle-question fa-xl"></i>
                What is E-waste?
            </div>
            <div className="faq-answer">
                <i className="fa-solid fa-lightbulb fa-xl"></i>
                E-waste, short for electronic waste, refers to discarded electronic devices and equipment. It includes items like old computers, smartphones, tablets, televisions, printers, and more.
            </div>
        </div>
        <div className="faq-item">
            <div className="faq-question">
                <i className="fa-solid fa-circle-question fa-xl"></i>
                What is the proper way to dispose E-waste?
            </div>
            <div className="faq-answer">
                <i className="fa-solid fa-lightbulb fa-xl"></i>
                To dispose of e-waste properly, take it to certified e-waste recycling centers or collection events. Don't throw it in regular trash. Recycling facilities can safely extract valuable materials and dispose of hazardous substances. Additionally, consider donating or reselling still-functional electronics to reduce waste.
            </div>
        </div>
        <div className="faq-item">
            <div className="faq-question">
                <i className="fa-solid fa-circle-question fa-xl"></i>
                How much time is taken to recycle E-waste?
            </div>
            <div className="faq-answer">
                <i className="fa-solid fa-lightbulb fa-xl"></i>
                The time required to recycle e-waste varies based on factors like the type and quantity of items, recycling methods, and facility capacity. On average, it can take several weeks to process and recycle e-waste, but more complex or large-scale operations may take longer. Efficient recycling helps recover valuable materials and reduce environmental impact.
            </div>
        </div>
        <div className="faq-item">
            <div className="faq-question">
                <i className="fa-solid fa-circle-question fa-xl"></i>
                Which precious metals we can extract from E-waste?
            </div>
            <div className="faq-answer">
                <i className="fa-solid fa-lightbulb fa-xl"></i>
                The time required to recycle e-waste varies based on factors like the type and quantity of items, recycling methods, and facility capacity. On average, it can take several weeks to process and recycle e-waste, but more complex or large-scale operations may take longer. Efficient recycling helps recover valuable materials and reduce environmental impact.
            </div>
        </div>
        <div className="faq-item">
            <div className="faq-question">
                <i className="fa-solid fa-circle-question fa-xl"></i>
                How much wealth can we generate from E-waste approximately?
            </div>
            <div className="faq-answer">
                <i className="fa-solid fa-lightbulb fa-xl"></i>
                <p>
                    The wealth generated from e-waste recycling can vary widely based on factors like the quantity and quality of materials recovered, market prices, and recycling efficiency. However, it's estimated that globally, e-waste contains billions of dollars' worth of precious metals and recyclable materials, making it a valuable resource for both the economy and the environment.
                </p>
            </div>
        </div>
    </div>
</section>
  
  {/* <!-- Faq Section --> */}


    </>
  )
}

export default Faq;