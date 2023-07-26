import * as pulumi from "@pulumi/pulumi"; 
import * as eks from "@pulumi/eks";

export function createEksCluster() {



    const cluster = new eks.Cluster("cluster", {})

    return cluster 
}

// export const kubeconfig = cluster.kubeconfig