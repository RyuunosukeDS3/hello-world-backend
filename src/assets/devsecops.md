# 🛡️ Workshop: Introdução ao DevSecOps para Iniciantes

---

## 🔷 Parte 1: O que é DevSecOps?

---

### 📘 Etimologia e Significado

DevSecOps é a junção de três áreas:

- **Dev**: de Desenvolvimento (programação e criação de sistemas)
- **Sec**: de Security (segurança da informação)
- **Ops**: de Operações (infraestrutura, deploy e monitoramento)

Juntas, formam uma cultura e práticas que integram desenvolvimento, segurança e operações de forma contínua e colaborativa.

---

### ❓ Por que DevSecOps existe?

No passado, essas áreas trabalhavam separadamente:

- Dev escrevia o código
- Ops colocava o código no ar
- Segurança revisava no final

Isso gerava atrasos, erros e falhas de segurança porque a proteção só era pensada no final do processo.
Com DevSecOps, a segurança é incorporada desde o começo, com colaboração entre todos os times.

---

### 💡 Definição simples

**DevSecOps é uma forma moderna de construir sistemas seguros, onde todo mundo é responsável pela segurança — não apenas um time separado.**

---

### 👥 O que fazem os times de DevSecOps?

| Área            | Exemplo de Atividade                                                |
| --------------- | ------------------------------------------------------------------- |
| Desenvolvimento | Escrever código seguro e seguindo boas práticas                     |
| Segurança       | Analisar vulnerabilidades no código e nas dependências              |
| Operações       | Automatizar deploys seguros e configurar infraestrutura             |
| Integração      | Criar pipelines que testam, validam e publicam código com segurança |

---

### ⚙️ Automação: o coração do DevSecOps

DevSecOps usa **muita automação** para garantir rapidez, qualidade e segurança na entrega de software.

---

### 🚀 O que é CI/CD?

- **CI (Integração Contínua)**: os desenvolvedores enviam código frequentemente para um repositório central. O código é automaticamente testado e validado a cada alteração.

- **CD (Entrega Contínua / Deployment Contínuo)**: o código aprovado é automaticamente enviado para ambientes de testes, homologação ou produção, reduzindo intervenção manual.

> Pense nisso como uma esteira de montagem automática, onde o código entra por um lado e sai funcionando do outro, seguro e testado.

---

### 🔐 Segurança dentro do CI/CD (DevSecOps)

**DevSecOps insere etapas de segurança dentro dessa esteira automatizada:**

| Fase       | Ação de DevSecOps                                          |
| ---------- | ---------------------------------------------------------- |
| CI         | Verificar falhas de segurança no código e bibliotecas      |
| Build      | Escanear imagens de container em busca de vulnerabilidades |
| CD         | Aplicar políticas de segurança antes do deploy             |
| Pós-deploy | Monitorar comportamento suspeito e disparar alertas        |

---

### 🛠️ Automatizações comuns em DevSecOps

| Tarefa                           | Ferramenta Exemplo                   |
| -------------------------------- | ------------------------------------ |
| Teste de código seguro           | SonarQube, CodeQL                    |
| Escaneamento de vulnerabilidades | Trivy, Snyk, Anchore                 |
| Validação de infraestrutura      | Checkov, TFLint                      |
| Deploy automatizado              | GitLab CI/CD, GitHub Actions, ArgoCD |
| Monitoramento e alertas          | Prometheus, Grafana, Falco           |

---

### 📦 Exemplo prático (simplificado)

Quando um desenvolvedor faz uma alteração:

- 🔍 O código passa por testes de qualidade
- 🧪 Executa testes automatizados de funcionalidade
- 🔐 Escaneia o código e dependências para falhas de segurança
- 🧰 Gera imagem Docker segura (se aplicável)
- ☁️ Faz deploy automático em ambiente de testes
- 👀 Monitora o sistema em produção para detectar problemas

**Tudo isso automaticamente, sem precisar que alguém execute manualmente cada etapa.**

---

### 🎯 Benefícios do DevSecOps

- ✅ Menos vulnerabilidades em produção
- ⚡ Entregas mais rápidas e seguras
- 🤝 Melhor comunicação entre os times
- 🔁 Menos retrabalho e custos menores
- 🔒 Software mais confiável e seguro

---

### 👪 Como explicar para leigos?

> “É como montar um carro já pensando na segurança desde a montagem da primeira peça, não só colocando o cinto de segurança no final.”

---

### 📌 Resumo para slides

- DevSecOps = Dev (Desenvolvimento) + Sec (Segurança) + Ops (Operações)
- Integra segurança desde o começo
- Todo mundo é responsável pela segurança
- Foco em automação, colaboração e entrega contínua
- Benefícios: segurança + velocidade + qualidade

---

### 🧩 Linguagens mais usadas em DevSecOps

Essas são as linguagens que mais aparecem no dia a dia de DevSecOps, com suas funções principais:

- **YAML** → Configuração de CI/CD, Kubernetes, Helm, ArgoCD.
  _Simples, declarativa e fácil de ler._

- **Bash / Shell** → Scripts de automação e pipelines.
  _Presente em todo ambiente Linux._

- **Python** → Scripts, automações e ferramentas de segurança como DefectDojo.
  _Fácil de escrever, poderosa e com muitas bibliotecas._

- **Go (Golang)** → Ferramentas como Trivy, Docker, Kubernetes, Helm.
  _Rápida, compilada e ideal para ferramentas CLI._

- **JavaScript / TypeScript** → Testes (Jest, Cypress), ferramentas como Commitizen e semantic-release.
  _Muito usada no ecossistema web._

- **Java** → Base de ferramentas como SonarQube e sistemas enterprise.
  _Popular em grandes empresas e soluções robustas._

- **HCL (Terraform)** → Infraestrutura como código com Terraform.
  _Específica, declarativa e simples de usar._

---

## 🔷 Parte 2: Ferramentas e Conceitos Explicados

---

### 🧱 1. Dev Container e Scaffolding

#### 📦 Dev Container

**O que é:**
Um ambiente de desenvolvimento definido como código, geralmente usando Docker.
Garante que todos desenvolvedores trabalhem com as mesmas versões de linguagens, bibliotecas e ferramentas, evitando erros do tipo “na minha máquina funciona”.

**Exemplo real:**
No VSCode, você pode usar a extensão “Remote - Containers”. Criando um arquivo `.devcontainer.json`, o VSCode abre o projeto dentro de um container Docker com tudo configurado (Node, Python, banco de dados, etc.).

---

#### 🧰 Scaffolding

**O que é:**
Processo automatizado que gera a estrutura inicial do projeto para você, com pastas, arquivos básicos e configuração inicial.

**Exemplo real:**

- Angular CLI: `ng new meu-projeto` cria toda a base do app com testes, rotas, estilos e configurações.
- Yeoman: Ferramenta genérica que, via geradores, cria projetos React, Node.js, APIs, etc.

---

### 📏 2. Lint e Commitlint (Commitizen, Lefthook)

#### 🧹 Lint

**O que é:**
Ferramenta que analisa o código fonte para encontrar problemas de sintaxe, estilo, complexidade e até possíveis bugs antes da execução.

**Exemplo real:**

- ESLint: Detecta código mal formatado, variáveis não usadas etc.
- Pylint: Faz o mesmo para Python.

---

#### 📝 Commitlint

**O que é:**
Valida as mensagens dos commits para seguir um padrão, como o Conventional Commits.

**Exemplo real:**

- **Commitizen**: Ajuda o dev a escrever commits padronizados por meio de perguntas simples.
- **Lefthook**: Roda scripts antes do commit/push, como ESLint, commitlint e testes automaticamente.

---

### 🧪 3. Scan de Vulnerabilidades em Dependências

#### ❗ Por que é importante?

Bibliotecas de terceiros podem ter falhas conhecidas.
Se você usa uma versão vulnerável, seu app fica exposto.

---

#### 🔍 Ferramentas

- **Trivy**

  - Escaneia containers Docker, código-fonte e dependências.
  - Usa bases públicas para identificar falhas.
  - Muito rápido e popular em pipelines CI/CD.

- **OWASP Dependency-Check**

  - Analisa bibliotecas usadas (Java, .NET, Python, Node.js).
  - Gera relatórios detalhados para priorizar atualizações.

---

### 🧪 4. Testes

#### 🧩 Teste Unitário

- Testa componentes isolados (função, classe).
- Exemplo:

  - **Jest** para JavaScript
  - **JUnit** para Java

---

#### 🔗 Teste E2E (End-to-End)

- Simula comportamento do usuário no sistema completo.
- Exemplo:

  - **Cypress**
  - **Selenium**

---

#### 🔁 Teste Automatizado

- Testes que rodam automaticamente a cada alteração no código.
- Integrados em pipelines CI/CD.

---

#### 📊 Coverage (Cobertura)

- Mede quantas linhas, funções ou blocos de código foram testados.
- Ferramentas:

  - **Istanbul** (JS)
  - **Jacoco** (Java)

---

### 🔍 5. SAST e DAST

#### 🧠 SAST (Static Application Security Testing)

Analisa o código-fonte procurando padrões inseguros.

##### ☑️ SonarQube

- Suporte a diversas linguagens (Java, JS, Python, etc)
- Aponta:

  - Bugs
  - Vulnerabilidades
  - Code Smells
  - Cobertura de testes
  - Cópia/cola de código
  - Complexidade ciclomática

> Pode ser rodado localmente via Docker ou usado via SonarCloud.

---

#### 🕸️ DAST (Dynamic Application Security Testing)

Testa a aplicação em execução, simulando ataques reais.

##### 🧰 OWASP ZAP

- Scanner automático e manual de aplicações
- Integrável com pipelines CI/CD

---

### 📋 6. DefectDojo

- Plataforma de gestão de vulnerabilidades.
- Consolida resultados de SAST, DAST, pentests.
- Facilita priorização, relatórios e acompanhamento para equipes.

---

### 📦 7. SBOM (Software Bill of Materials) e Dependency Check

#### 📑 SBOM

- Documento que lista todas as bibliotecas e versões usadas no software.
- Ajuda a entender exatamente o que está rodando em produção.
- Facilita auditorias de segurança, conformidade e resposta a incidentes.

#### 🛠️ Ferramentas de SBOM

- **Syft**

  - Gera SBOMs a partir de containers, diretórios e repositórios.

- **CycloneDX**

  - Formato padrão para SBOM, com suporte por várias ferramentas.

- **Trivy**

  - Além de scanner, também pode gerar SBOMs.

## 🧩 8. Infraestrutura como Código (IaC)

---

### 📜 O que é IaC?

- **Infraestrutura como Código** é a prática de definir toda a infraestrutura (servidores, redes, balanceadores, etc.) através de arquivos de configuração legíveis por máquina, que podem ser versionados e automatizados.

- Substitui a configuração manual, trazendo confiabilidade, repetibilidade e auditabilidade.

---

### 🛠️ Ferramentas populares

- **Terraform** (HashiCorp) — Declarativo, multi-cloud
- **AWS CloudFormation** — Para AWS
- **Ansible** — Automação por playbooks (também pode fazer config de infra)
- **Pulumi** — Usa linguagens tradicionais (TypeScript, Python, Go) para IaC

---

### 🚀 Benefícios

- Provisionamento rápido e consistente
- Facilita replicação de ambientes
- Integração com pipelines DevOps/DevSecOps
- Permite revisões de mudanças via Git

---

## 🧪 9. Containers, Kubernetes e Segurança

---

### 📦 Containers

- São ambientes isolados para executar aplicações e dependências.
- Facilitam portabilidade e consistência entre dev, teste e produção.

---

### 🧩 Kubernetes

- Orquestrador de containers.
- Garante escalabilidade, alta disponibilidade, deploys automáticos, e gerenciamento de recursos.

---

### 🔒 Segurança em Kubernetes

- **Políticas de rede (Network Policies)** para controlar comunicação entre pods
- **Pod Security Policies** para restringir privilégios
- **Imagem segura** com escaneamento via Trivy ou Clair
- **Role-Based Access Control (RBAC)** para limitar permissões
- **Segurança em runtime** com Falco, Aqua Security, etc.

---

### 🧰 Ferramentas DevSecOps para Kubernetes

- **Helm**: gerenciador de pacotes para apps Kubernetes, permite versionamento e reutilização.
- **ArgoCD**: GitOps para Kubernetes, sincroniza configs do Git com o cluster automaticamente.
- **Trivy**: escaneia vulnerabilidades em imagens container e infraestrutura.

---

## 🔍 10. Monitoramento, Alertas e Resposta a Incidentes

---

### 📊 Monitoramento Contínuo

- Monitorar a saúde, performance e segurança dos sistemas em produção.
- Detectar anomalias antes que se tornem problemas graves.

---

### 🛎️ Alertas

- Configurar alertas para falhas, comportamentos estranhos, ou ataques detectados.
- Notificar equipes via email, SMS, Slack, etc.

---

### 🧑‍🚒 Resposta a Incidentes

- Plano para investigar, mitigar e corrigir vulnerabilidades ou falhas.
- Uso de ferramentas de log (ELK Stack), SIEM, e playbooks automáticos.

---

### 🛠️ Ferramentas Comuns

| Tipo          | Ferramenta                                  | Função                          |
| ------------- | ------------------------------------------- | ------------------------------- |
| Monitoramento | Prometheus, Grafana                         | Métricas, dashboards            |
| Logging       | ELK Stack (Elasticsearch, Logstash, Kibana) | Centralização e análise de logs |
| Segurança     | Falco, Wazuh                                | Detecção de intrusão em runtime |
| Alertas       | Alertmanager, PagerDuty                     | Gestão e disparo de alertas     |

---

## 🏁 Conclusão

---

- DevSecOps é uma evolução natural para acelerar entregas sem abrir mão da segurança.
- Integração, automação e colaboração são pilares essenciais.
- Conhecer as ferramentas e processos é fundamental para aplicar DevSecOps na prática.
- A segurança deixa de ser responsabilidade exclusiva de um time e passa a ser parte do DNA de todo ciclo de desenvolvimento.

---

💡 **Dica final:** Comece pequeno, automatize o que for possível e vá aumentando a maturidade gradualmente.
Segurança é um processo contínuo, não um evento.
