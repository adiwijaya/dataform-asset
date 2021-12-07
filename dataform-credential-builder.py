import argparse
import json

parser = argparse.ArgumentParser("Dataform credential parameters")
parser.add_argument("projectId", help="The GCP project id to run dataform commands", type=str)
parser.add_argument("credentialsPath", help="Path to GCP service account key. e.g /home/key.json", type=str)
parser.add_argument("location", help="Default GCP location. e.g US", type=str)

def create_dataform_credential(project_id, sa_key, location):
    try:
        key_file = open(sa_key, 'r')
        key_value = key_file.read()
        
        dataform_credential = {"projectId": project_id, "credentials": key_value,"location": location}

        with open('.df-credentials.json', 'w') as f:
            json.dump(dataform_credential, f)
        
        print("Credential file generated to .df-credentials.json")
    except:
        print("Generating dataform credential failed")

if __name__ == '__main__':
    args = parser.parse_args()
    project_id = args.projectId
    credentials = args.credentialsPath
    location = args.location

    create_dataform_credential(project_id, credentials, location)

    



    
