module.exports = {
    ifeq: function(a, b, options){
      if (a === b) {
        return options.fn(this);
        }
      return options.inverse(this);
    },
    bar: function(){
      return "BAR!";
    },
    capitalize: function(string){
      if (typeof string !== 'string') return ''
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }