import { Badge, Card } from "flowbite-react";
import * as m from "../paraglide/messages.js";

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-100">
          {m.skills_heading()}
        </h2>
        <p className="text-sm text-slate-300">{m.skills_subtitle()}</p>
      </div>

      <div className="flex flex-row gap-6">
        <Card className="basis-1/3 border-slate-800 bg-slate-900/40">
          <h3 className="text-xl font-semibold text-slate-100">
            {m.skills_languages()}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge key="go" color="teal" size="sm">
              Go
            </Badge>
            <Badge key="python" color="teal" size="sm">
              Python
            </Badge>
            <Badge key="php" color="teal" size="sm">
              PHP
            </Badge>
            <Badge key="csharp" color="teal" size="sm">
              C#
            </Badge>
            <Badge key="sql" color="teal" size="sm">
              SQL
            </Badge>
            <Badge key="nosql" color="teal" size="sm">
              NoSQL
            </Badge>
            <Badge key="bash" color="teal" size="sm">
              Bash
            </Badge>
            <Badge key="powershell" color="teal" size="sm">
              PowerShell
            </Badge>
            <Badge key="typescript" color="teal" size="sm">
              TypeScript
            </Badge>
            <Badge key="react" color="teal" size="sm">
              React
            </Badge>
          </div>
        </Card>
        <Card className="basis-1/3 border-slate-800 bg-slate-900/40">
          <h3 className="text-xl font-semibold text-slate-100">
            {m.skills_offensive()}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge key="metasploit" color="red" size="sm">
              Metasploit
            </Badge>
            <Badge key="nmap" color="red" size="sm">
              Nmap
            </Badge>
            <Badge key="burpsuite" color="red" size="sm">
              Burp Suite
            </Badge>
            <Badge key="wireshark" color="red" size="sm">
              Wireshark
            </Badge>
            <Badge key="kalilinux" color="red" size="sm">
              Kali Linux
            </Badge>
            <Badge key="cobaltstrike" color="red" size="sm">
              Cobalt Strike
            </Badge>
          </div>
        </Card>
        <Card className="basis-1/3 border-slate-800 bg-slate-900/40">
          <h3 className="text-xl font-semibold text-slate-100">
            {m.skills_technologies()}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge key="git" color="indigo" size="sm">
              Git
            </Badge>
            <Badge key="docker" color="indigo" size="sm">
              Docker
            </Badge>
            <Badge key="kubernetes" color="indigo" size="sm">
              Kubernetes
            </Badge>
            <Badge key="aws" color="indigo" size="sm">
              AWS
            </Badge>
            <Badge key="azure" color="indigo" size="sm">
              Azure
            </Badge>
            <Badge key="linux" color="indigo" size="sm">
              Linux
            </Badge>
            <Badge key="keycloak" color="indigo" size="sm">
              Keycloak
            </Badge>
            <Badge key="jenkins" color="indigo" size="sm">
              Jenkins
            </Badge>
          </div>
        </Card>
        <Card className="basis-1/3 border-slate-800 bg-slate-900/40">
          <h3 className="text-xl font-semibold text-slate-100">
            {m.skills_databases()}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge key="mariadb" color="purple" size="sm">
              MySQL/MariaDB
            </Badge>
            <Badge key="postgres" color="purple" size="sm">
              PostgreSQL
            </Badge>
            <Badge key="mongo" color="purple" size="sm">
              MongoDB
            </Badge>
            <Badge key="redis" color="purple" size="sm">
              Redis
            </Badge>
            <Badge key="couchdb" color="purple" size="sm">
              CouchDB
            </Badge>
            <Badge key="neo4j" color="purple" size="sm">
              Neo4j
            </Badge>
          </div>
        </Card>
      </div>
    </section>
  );
}
