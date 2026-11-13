import Container from "@/components/ui/Container";
import { C } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-8 md:py-10" style={{ background: C.accent }}>
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <span
          className="font-heading font-black text-sm tracking-widest"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          PLENG.
        </span>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          © 2026 Tipparida Rujisunkuntorn
        </p>
      </Container>
    </footer>
  );
}
