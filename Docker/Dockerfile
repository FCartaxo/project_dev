# Imagem base
FROM python:3.11-slim

# Copiar ficheiros e instalar dependências
WORKDIR /src
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copiar aplicação
COPY app.py .

# Criar utilizador para segurança
RUN groupadd -r demouser && useradd -r -g demouser demouser
RUN chown -R demouser:demouser /src
USER demouser

# Variável de ambiente para Redis
ENV REDIS_HOST=redis

# Expor porta da aplicação
EXPOSE 5000

# Comando para correr a app
CMD ["flask", "run", "-h", "0.0.0.0", "-p", "5000"]
