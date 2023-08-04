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
    certifications: Corpus [];
  };
}
export const MyData: Competences = {
  id: 1,
  data: {
    language: [
      {id:1, name:"Java", level:4},{id:2, name:"JavaScript", level:4},{id:3, name:"TypeScript", level:4},{id:4, name:"SQL", level:4},
      {id:5, name:"HTML", level:4},{id:6, name:"Ruby", level:3},{id:7, name:"Solidity", level:3},{id:8, name:"C/C++ ", level:3},
      {id:9, name:"CSS", level:3},{id:10, name:"VHDL", level:2},{id:11, name:"Shell", level:2},{id:11, name:"Python", level:2}
    ],
    framework: [
      {id:1, name:"Angular", level:4},{id:2, name:"Spring Boot", level:4},{id:3, name:"Quarkus", level:3},{id:4, name:"Node js", level:3},
      {id:5, name:"Ruy on Rails", level:3},{id:6, name:"React", level:2},{id:7, name:"Qt", level:2},{id:8, name:".NET", level:2},
      {id:9, name:"Vue Js", level:1},
    ],
    cloud: [
      {id:1, name:"Google Cloud", level:3},{id:2, name:"AWS", level:2},{id:3, name:"Lenode", level:2},{id:4, name:"Azure", level:2},
      {id:5, name:"Oracle", level:1}
    ],
    devops: [
      {id:1, name:"Docker", level:3},{id:2, name:"Github Action ", level:3},{id:3, name:"Jenkins", level:3},{id:4, name:"Kubernetes", level:3},
      {id:5, name:"Terraform", level:3},{id:6, name:"Helm ", level:2},
    ],
    database: [
      {id:1, name:"Mysql", level:4},{id:2, name:"Postgres Sql", level:4},{id:3, name:"Monogo DB", level:3},{id:4, name:"BigQuery", level:3},
    ],
    testing: [
      {id:1, name:"Cypress", level:3},{id:2, name:"JUnit", level:3},{id:3, name:"Jest", level:3},{id:3, name:"Karma", level:3}
    ],
    os: [
      {id:2, name:"Windows", level:5},{id:1, name:"Unix / Linux", level:3}
    ],
    ide: [
      {id:1, name:"Intellij", level:5},{id:2, name:"VS Code", level:5},{id:3, name:"Visual Studio", level:4},{id:4, name:"DB Visualizer", level:2}
    ],
    tools: [
      {id:1, name:"Microsoft Office", level:4},{id:2, name:"Ethereum", level:3},{id:3, name:"Metamask", level:3},{id:4, name:"Git", level:4},
      {id:5, name:"Polygon", level:3},{id:6, name:"Raspberry pi", level:3},{id:7, name:"Docker Hub", level:3},{id:8, name:"SonarQube", level:2},
      {id:9, name:"OpenApi", level:2},{id:10, name:"BPMN", level:2}
    ],
    certifications:[]
  }
}
