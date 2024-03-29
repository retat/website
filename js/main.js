const popupElement = $("#popup")

function showSocial() {
    togglePopup(
        "        <div class=\"popupContent\">\n" +
        "        <p>Stalk me on:</p>\n" +
        "        <a href=\"https://twitter.com/Rene__Borner\">Twitter</a><br>\n" +
        "        <a href=\"https://github.com/retat\">Github</a><br>\n" +
        "        <a href=\"https://www.instagram.com/rene______b/\">Instagram</a>\n" +
        "    </div>", "social")
}

function showProjects() {
    togglePopup(
        "        <div class=\"popupContent\">\n" +
        "        <p>Some projects:</p>\n" +
        "        <a href=\"http://ai.reneborner.de\">AI Presentation</a><br>\n" +
        "        <a href=\"https://cs4241-best-group-fp-7.glitch.me/\">Music Recommendations Platform</a><br>\n" +
        "        <a href=\"https://github.com/retat/AI-TranslationModelServer\">English to Java AI Project</a><br>\n" +
        "        <a href=\"https://retat.github.io/audiofile-visualizer/\">Audiofile Visualizer</a>\n" +
        "    </div>", "projects")
}

function showCV() {
    togglePopup(
        "        <div class=\"popupContent\">\n" +
        "        <p>Résumé:</p>\n" +
        "        <p>CV currently not available online</p><br>\n" +
        "    </div>", "cv")
}

function togglePopup(content, type) {
    if (popupElement.hasClass("active") && popupElement.hasClass(type)) {
        popupElement.fadeOut().html(content)
        popupElement.removeClass("active").removeClass(type);
    } else if (popupElement.hasClass("active") && !popupElement.hasClass(type)) {
        popupElement.removeClass()
        popupElement.fadeIn().html(content).addClass("active").addClass(type).addClass("popup")
    }else {
        popupElement.fadeIn().html(content).addClass("active").addClass(type)
    }
}
