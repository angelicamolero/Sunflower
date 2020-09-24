export const selectProduct = (prodID, data, functionHook, constHook) => {
    const product = data.filter(p => p.id === prodID)[0];
    functionHook([
        ...[constHook],
        product //tambien puede ser ...product y borrar el [0]
    ]); 
}