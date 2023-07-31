export interface Corpus {
  id: number;
  name: string;
  level: number;
}

export interface Competences {
  id: number;
  data: {
    language: Corpus[];
    framework: Corpus[];
    cloud: Corpus[];
    devops: Corpus[];
    database: Corpus[];
    testing: Corpus[];
    os: Corpus[];
    ide: Corpus[];
    tools: Corpus[];
  };
}
export const MyData: Competences = {
  id: 1,
  data: {
    language: [
      {id:1, name:"c++",level:2},{id:2, name:"java",level:3},{id:3, name:"javascript",level:4},{id:4, name:"solidity",level:5}
    ],
    framework: [
      {id:1, name:"Springboot",level:2},{id:2, name:"angular",level:3},{id:3, name:"react",level:4},{id:4, name:"quarkus",level:5}
    ],
    cloud: [
      {id:1, name:"Azure",level:2},{id:2, name:"Google Cloud",level:3},{id:3, name:"Oracle",level:5}
    ],
    devops: [
      {id:1, name:"Jenkins",level:2},{id:2, name:"Github Action",level:3},{id:3, name:"Terraform",level:4},{id:4, name:"Kubernetes",level:5},{id:5, name:"Helm",level:6},{id:5, name:"Docker",level:3}
    ],
    database: [
      {id:1, name:"Mysql",level:2},{id:2, name:"Postgres Sql",level:3},{id:3, name:"Monogo DB",level:4}
    ],
    testing: [
      {id:1, name:"JUnit",level:2},{id:2, name:"Jest",level:3},{id:3, name:"Karma",level:4},{id:4, name:"Cypress",level:5}
    ],
    os: [
      {id:1, name:"Unix / Linux",level:4},{id:2, name:"Windows",level:5}
    ],
    ide: [
      {id:1, name:"VS Code",level:5},{id:2, name:"Intellij",level:5},{id:3, name:"Visual Studio",level:4},{id:4, name:"DB Visualizer",level:2}
    ],
    tools: [
      {id:1, name:"Raspberry pi",level:3},{id:2, name:"Git",level:4},{id:3, name:"Microsoft Office",level:4}
    ]
  }
}
