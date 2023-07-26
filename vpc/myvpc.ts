import * as pulumi from "@pulumi/pulumi"
import * as aws from "@pulumi/aws"


export class MyVpc {

    createVpc() {
        new aws.ec2.Vpc("main", {
            cidrBlock: "10.0.0.0/16"
        })
    }
}



