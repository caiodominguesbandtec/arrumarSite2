let email_usuario;
let senha_usuario;

function redirecionar_login() {
    window.location.href = 'login.html';
}

function tipoCliente(){
    var pontos = 0;
    var contador_eventos = 0;
    var regar_vaso_1 = 0.56;
    var regar_vaso_2 = 0.19;
    var regar_vaso_3 = 0.1;
    if (sessionStorage.conta_usuario = "p"){
        fetch('/leituras/tempo-real', { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
    
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
    
                    resposta.reverse();
                    for (i = 0; i < resposta.length; i++){
                        var registro = resposta[i];
                    while(contador_eventos <= 143)
                    {
                        if (registro.regTemperatura >= tempTerQua.innerHTML)
                        {
                            pontos += 1;
                            contador_eventos++;
                        }
                        if (registro.regTemperatura <= tempPriQua.innerHTML)
                        {
                            pontos += -1;
                            contador_eventos++;
                        }
                        if (registro.regTemperatura >= tempMax.innerHTML)
                        {
                            pontos += 2;
                            contador_eventos++;
                        }
                        if (registro.regTemperatura <= tempMin.innerHTML)
                        {
                            pontos += -2;
                            contador_eventos++;
                        }
                        if (registro.regUmidade >= umiTerQua.innerHTML)
                        {
                            pontos += 0.5;
                            contador_eventos++;
                        }
                        if (registro.regUmidade <= umiPriQua.innerHTML)
                        {
                            pontos += -0.5;
                            contador_eventos++;
                        }
                        if (registro.regUmidade >= umiMax.innerHTML)
                        {
                            pontos += 1;
                            contador_eventos++;
                        }
                        if (registro.regUmidade <= umiMin.innerHTML)
                        {
                            pontos += -1;
                            contador_eventos++;
                        }
                        if (registro.regTemperatura > tempPriQua.innerHTML || registro.regTemperatura < tempTerQua.innerHTML)
                        {
                            contador_eventos++;
                        }
                        if (registro.umiTemperatura > umiPriQua.innerHTML || registro.umiTemperatura < umiTerQua.innerHTML)
                        {
                            contador_eventos++;
                        }
                    }
                    fetch(`/leituras/ProdutosCli/${email_usuario}`, { cache: 'no-store' }).then(function (response) {
                        if (response.ok) {
                            response.json().then(function (resposta) {
                
                                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                
                                resposta.reverse();
                                if(produto.tipoDeVaso == 1)
                                {
                                    if(pontos >= 60)
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_1*1.1} lítros de água, ou ${regar_vaso_1*1.1*100} mililítros`;
                                    }
                                    else if(pontos >= 20)
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_1*1.05} lítros de água, ou ${regar_vaso_1*1.05*100} mililítros`;
                                    }
                                    else if(pontos >= -20)
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_1} lítros de água, ou ${regar_vaso_1*100} mililítros`;
                                    }
                                    else if(pontos >= -60)
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_1*1.95} lítros de água, ou ${regar_vaso_1*1.95*100} mililítros`;
                                    }
                                    else
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_1*1.90} lítros de água, ou ${regar_vaso_1*1.90*100} mililítros`;
                                    }
                                }
                                if(produto.tipoDeVaso == 2)
                                {
                                    if(pontos >= 60)
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_2*1.1} lítros de água, ou ${regar_vaso_2*1.1*100} mililítros`;
                                    }
                                    else if(pontos >= 20)
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_2*1.05} lítros de água, ou ${regar_vaso_2*1.05*100} mililítros`;
                                    }
                                    else if(pontos >= -20)
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_2} lítros de água, ou ${regar_vaso_2*100} mililítros`;
                                    }
                                    else if(pontos >= -60)
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_2*1.95} lítros de água, ou ${regar_vaso_2*1.95*100} mililítros`;
                                    }
                                    else
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_2*1.90} lítros de água, ou ${regar_vaso_2*1.90*100} mililítros`;
                                    }
                                }
                                if(produto.tipoDeVaso == 3)
                                {
                                    if(pontos >= 60)
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_3*1.1} lítros de água, ou ${regar_vaso_3*1.1*100} mililítros`;
                                    }
                                    else if(pontos >= 20)
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_3*1.05} lítros de água, ou ${regar_vaso_3*1.05*100} mililítros`;
                                    }
                                    else if(pontos >= -20)
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_3} lítros de água, ou ${regar_vaso_3*100} mililítros`;
                                    }
                                    else if(pontos >= 60)
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_3*1.95} lítros de água, ou ${regar_vaso_3*1.95*100} mililítros`;
                                    }
                                    else
                                    {
                                        alerta_regar.innerHTML = `Regue sua planta com ${regar_vaso_3*1.90} lítros de água, ou ${regar_vaso_3*1.90*100} mililítros`;
                                    }
                                }
                            });
                        } else {
                            console.error('Nenhum dado encontrado ou erro na API');
                        }
                    })
                }
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        btnPlanta.disabled = true
    } else {
        btnPlanta.disabled = false
    }
}

function verificar_autenticacao() {

    email_usuario = sessionStorage.email_usuario;
    senha_usuario = sessionStorage.senha_usuario;
    validar_sessao();
    
    if (email_usuario == undefined)  {
        alert(`erro ao verificar Perfil`);
        // redirecionar_login();
    }
    
}

function newFunction() {
    b_usuario.innerHTML = email_usuario;
}

function logoff() {
    window.location.href = 'index.html';
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${email_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${email_usuario}`, {cache:'no-store'}); 
}