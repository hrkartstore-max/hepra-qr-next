import Link from 'next/link';
import { logout } from '@/app/actions';

export function Flash({ err, ok }: { err?: string; ok?: string }) {
  if (err) return <div className="f err" role="alert">{err}</div>;
  if (ok) return <div className="f ok" role="status">{ok}</div>;
  return null;
}
export default function Shell({ children }: { children: React.ReactNode }) {
  return <><nav><b>▦ HEPRA QR Manager</b><span className="row" style={{alignItems:'center'}}><Link href="/admin">Codes</Link><form action={logout} className="inline"><button className="btn s sm">Logout</button></form></span></nav><main className="w">{children}</main></>;
}