function checkKeywords() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var keywords = []; //Put your keywords in here
  var keywords_found = [];

  var body_text = body.getText().toLowerCase();

  for (var i = 0; i < keywords.length; i++) {
    var keyword_lower = keywords[i].toLowerCase(); 
    var keyword_start = body_text.indexOf(keyword_lower);
    while (keyword_start > -1) {
      var keyword_end = keyword_start + keyword_lower.length - 1;
      var keyword = body_text.substring(keyword_start, keyword_end + 1);
      if (keywords_found.indexOf(keyword) === -1) { 
        keywords_found.push(keyword);
      }
      keyword_start = body_text.indexOf(keyword_lower, keyword_end + 1);
    }
  }

  var num_keywords_found = keywords_found.length;
  var num_keywords_total = keywords.length;
  var keyword_ratio = num_keywords_found + '/' + num_keywords_total;
  var keywords_found_message = "The document contains the following keywords: \n\n"+ keywords_found.join(', ');
  var keyword_ratio_message = " (" + keyword_ratio + ")";
  var message = keywords_found_message + '\n\n' + keyword_ratio_message;
  DocumentApp.getUi().alert(message);
}
