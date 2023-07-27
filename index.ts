import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import { createBucket } from "./s3-bucket/mybucket"
import { MyVpc } from "./vpc/myvpc"; 
import { createEksCluster } from "./eks/eks-file"; 


// const vpc_network = new MyVpc(); 

// vpc_network.createVpc() 

const cn = createEksCluster() 

export const eksresult = cn.kubeconfig; 
