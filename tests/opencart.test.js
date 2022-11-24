describe('Carrito', () => {  
  
  it('Debería buscar iphone', async ()=> {
    await browser.url('/');
    let barraDeBusqueda = await $('[name="search"]');
    await barraDeBusqueda.setValue('iphone');
    await assert.equal(await barraDeBusqueda.getValue(),'iphone','Error: no se mostró el texto esperado en la barra de búsqueda');
    await barraDeBusqueda.keys('Enter');            
    await assert.equal(await $('h4').getText(),'iPhone','Error: no se mostró el header esperado');
   });
  

    it('Debería buscar apple cinema, ingresar al artículo y seleccionar un color', async () => {
        await browser.url('/')
        let barraDeBusqueda = await $('[name="search"]');
        await barraDeBusqueda.setValue('apple cinema');
        await barraDeBusqueda.keys('Enter');
        let articulo = await $('=Apple Cinema 30"');
        await articulo.click();
        let dropDownColor = await $('select');
        await dropDownColor.selectByIndex(2);
        await browser.pause(5000);
        console.log(await dropDownColor.getValue());
    });

 });
