// Script
//------------------------------------------------------------------------------

$(document).ready(function() {
    // Reset the window scroll position to top on every page load and re-load
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
  
  // Auto remove body loading class to have a hook to prevent UI bugs
  function removeLoadingClassDelay() {
  window.setTimeout(removeLoadingClass, 3250);
  }
  function removeLoadingClass() {
  $('body').removeClass('is--loading');
  }
  removeLoadingClassDelay();
  
  // Intro section options
    $('.section.intro .option').click(function() {
      $('.section.intro .option').removeClass('is--active');
      $('.section.intro .text').removeClass('is--visible');
    });
  
    $('.section.intro .option.about').click(function() {
      $('.section.intro .option.about').addClass('is--active');
      $('.section.intro .text.about').addClass('is--visible');
    });
    $('.section.intro .option.occupation').click(function() {
      $('.section.intro .option.occupation').addClass('is--active');
      $('.section.intro .text.occupation').addClass('is--visible');
    });
    $('.section.intro .option.interest').click(function() {
      $('.section.intro .option.interest').addClass('is--active');
      $('.section.intro .text.interest').addClass('is--visible');
    });
  });
  
  