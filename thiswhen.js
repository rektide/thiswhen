module.exports= function(fn){
	return this.then(function(val){
		return fn.call(val)
	})
}
