function openFAQ(index)
{
    document.getElementsByClassName("faq-content").style.display = "none"
    document.querySelector('.faq__wrapper :nth-child(' + CSS.escape(index) + ') .faq-content').style.display = "block"
}