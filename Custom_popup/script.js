function showModel(titleHTML,contentHTML, button)
{
    const model = document.createElement("div");
    model.classList.add("model")

}



showModel("Sample Model Title","<p>I am the content of this model</p>",[
    {
        'label':'Got it',
        onClick:()=>{
            console.timeLog("The button was clicked");
        },
        triggerClose:true
    }
])