module.exports= function(fn, opts){
	opts= opts|| {}
	if(opts.rest){
		return this.then(function(val){
			var this_
			if(!val.unshift){
				this_= val
				val= undefined
			}else{
				// for arraylike, take first arg, spread remaining out
				this_= val.unshift()
			}
			return fn.apply(this_, val)
		})
	}
	return this.then(function(val){
		return fn.call(val)
	})
}
