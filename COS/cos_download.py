import boto3
import botocore

cos = boto3.client(
    "s3",
    aws_access_key_id="b3715dee3eb64aa88c5db9ddc82bde05",
    aws_secret_access_key="777913063c22c2375697a27c21dec0466f6ea573a44d4f93",
    endpoint_url="https://s3.eu-madrid.cloud-object-storage.appdomain.cloud"
)

bucket_name = "somebucket-for-interview"
file_name = "README.md"

try:
    cos.download_file(bucket_name, file_name, file_name)
    print(f"Ficheiro {file_name} descarregado com sucesso!")
except botocore.exceptions.ClientError as e:
    print(f"Erro ao descarregar ficheiro: {e}")