function yeddiyeBolme(eded) {
    let qaliq=eded%7;
    if(qaliq==0){
        console.log("bolunur")
    }
    else{
        console.log("bu eded 7e bolunmur lakin bizde 7e bolunen eded var")
        if(qaliq<=(7/2)){
            console.log(eded-qaliq)
        }
        else{
            console.log(eded+(7-qaliq))
        }
    }
}

yeddiyeBolme(19.97)