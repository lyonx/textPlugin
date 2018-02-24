const defaultData = {
  content: {
    text :
      '<p>The WYSIWYG (which stands for What You See Is What You Get) allows you to do some really cool stuff. You can add images like this</p>\
      <p><img src="https://static.pexels.com/photos/12057/pexels-photo-12057-large.jpeg" alt="" width="100%" height="auto" /></p>\
      <p>You can even create links like these:<br /> Link to web content like <a href="http://www.google.com">this</a><br /> Link to a phone number like this <a href="tel: 8005551234">8005551234</a><br /> Link to an email like this <a href="mailto:noreply@google.com">noreply@google.com</a></p>\
      <p>Want to add some super cool videos about this item? You can do that too!</p>\
      <p><iframe src="https://www.youtube.com/embed/wTcNtgA6gHs" width="100%" height="auto" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>\
      <p>You can create bulleted and numbered lists like this:</p>\
      <ul>\
      <li>This is an item in a list</li>\
      <li>This is another item in a list</li>\
      <li>This is a last item in a list</li>\
      </ul>\
      <p>Want more info? Check out our tutorial by clicking the help button at the top of this page.</p>',

    carouselImages : [
      {"action":"noAction","iconUrl":"http://imageserver.prod.s3.amazonaws.com/b55ee984-a8e8-11e5-88d3-124798dea82d/5db61d30-0854-11e6-8963-f5d737bc276b.jpg","title":"image 1"},{"action":"noAction","iconUrl":"http://imageserver.prod.s3.amazonaws.com/b55ee984-a8e8-11e5-88d3-124798dea82d/31c88a00-0854-11e6-8963-f5d737bc276b.jpeg","title":"image 2"}
    ]
  },
  design: {
    backgroundImage: null,
    selectedLayout: 1
  }
};

export default defaultData;
