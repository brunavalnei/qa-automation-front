#language: en
Feature: Formulário

  Background: Abrir a página
    Given que eu abro a pagina

  @Positive
  Scenario: Novo usuário - todos os campos preenchidos
    When digito nome
    * digito ultimo nome
    * digito email
    * digito endereco
    * digito universidade
    * digito profissao
    * digito genero
    * digito idade
    Then clico no botao Criar
    Then retorna a mensagem "Usuário Criado com sucesso"

  @Positive
  Scenario: Cadastro de usuário apenas com campos obrigatórios
    When digito nome
    * digito ultimo nome
    * digito email
    Then clico no botao Criar
    Then retorna a mensagem "Usuário Criado com sucesso"

  @Negative
  Scenario: Campos obrigatórios não preenchidos
    Then clico no botao Criar
    Then retorna a mensagem de erro "3 errors proibiu que este usuário fosse salvo:"

  @Negative
  Scenario: Campos obrigatório nome não informado
    * digito ultimo nome
    * digito email
    * digito endereco
    * digito universidade
    * digito profissao
    * digito genero
    * digito idade
    Then clico no botao Criar
    Then retorna a mensagem de erro "1 error proibiu que este usuário fosse salvo:"

##  #cenário com erro - campo é obrigatório porém foi possível cadastrar usuário
##  @Negative
##  Scenario: Campos obrigatório último nome não informado
##    When digito nome
##    * digito email
##    * digito endereco
##    * digito universidade
##    * digito profissao
##    * digito genero
##    * digito idade
##    Then clico no botao Criar
##    Then retorna a mensagem de erro "1 error proibiu que este usuário fosse salvo:"

  @Negative
  Scenario: Campos obrigatório email não informado
    When digito nome
    * digito ultimo nome
    * digito endereco
    * digito universidade
    * digito profissao
    * digito genero
    * digito idade
    Then clico no botao Criar
    Then retorna a mensagem de erro "2 errors proibiu que este usuário fosse salvo:"

  @Negative
  Scenario: E-mail inválido
    When digito nome
    * digito ultimo nome
    * digito email "batata"
    * digito endereco
    * digito universidade
    * digito profissao
    * digito genero
    * digito idade
    Then clico no botao Criar
    Then retorna a mensagem de erro "1 error proibiu que este usuário fosse salvo:"


 #   #idade: informo letra e apenas informa que precisa inserir um número. Ao invés de criar um
 # #cenário de erro, colocaria uma validação no próprio código para permitir apenas número.
