// Thato Kalagobe u21487279

$(document).ready(() => {

  const youtube = (url) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return youtubeRegex.test(url);
  };

  const embedLink = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/i); 
    if (match && match[1]) {
      const vid = match[1];
      const iframe = $('<iframe>').attr({
        src: `https://www.youtube.com/embed/${vid}`,
        width: '100%',
        height: '315',
        frameborder: '0',
        allowfullscreen: 'true'
      });
      return iframe;
    }
    return null;
  };
  

  const addMessage = (message, buttonClicked) => {
    if (message.trim() !== '') {
        const messages = $('<div>').addClass('col-4 offset-4 mb-2 rounded-bottom');
        const messageParts = message.split(/\s+/);
        messageParts.forEach((part) => {
            if (youtube(part)) 
            messages.append(embedLink(part));
            else 
            messages.append(document.createTextNode(part + ' '));
        });

        if (buttonClicked === 'left')
            messages.css('background-color', 'grey');
        else if (buttonClicked === 'right')
            messages.css('background-color', 'lightblue');
        
        $('.messages').prepend(messages);
        $('#message').val('');
    }
  };

  $(document).on('click', '.submit', () => {
    // const message = $('#message').val(); //value of message
    addMessage($('#message').val()), $(this).attr('id'); //call message
  });
});