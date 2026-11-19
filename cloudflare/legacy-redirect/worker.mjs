const legacyRedirect = {
  fetch(request) {
    const destination = new URL(request.url);
    destination.protocol = "https:";
    destination.hostname = "skills.otato.art";
    destination.port = "";
    return Response.redirect(destination, 308);
  },
};

export default legacyRedirect;
