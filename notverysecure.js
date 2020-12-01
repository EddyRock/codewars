function alphanumeric(string){
    const regexp = /[^\s_!_&()-]/g;
    const res = string.match(regexp)
    
      return !!(res && string.length === res.length)
  }