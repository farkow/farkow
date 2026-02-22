import { Badge, Card } from "flowbite-react";
import * as m from "../paraglide/messages.js";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-100">
          {m.certs_heading()}
        </h2>
        <p className="text-sm text-slate-300">{m.certs_subtitle()}</p>
      </div>
      <Card className="border-slate-800 bg-slate-900/40">
        <div className="flex flex-wrap gap-2">
          <Badge key="zeropoint" color="success" size="sm">
            ZeroPoint Security Red Team Ops
          </Badge>
          <Badge key="oscp" color="success" size="sm">
            OSCP Dante
          </Badge>
          <Badge key="iso27001" color="info" size="sm">
            ISO 27001
          </Badge>
          <Badge key="nist-ssdf" color="info" size="sm">
            NIST SSDF
          </Badge>
          <Badge key="nist-csf" color="info" size="sm">
            NIST CSF
          </Badge>
          <Badge key="owasp" color="info" size="sm">
            OWASP Top 10
          </Badge>
        </div>
      </Card>
    </section>
  );
}
