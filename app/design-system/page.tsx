import { Main } from "@/app/components/layout/main";
import { Header } from "./_components/header";
import { Colors } from "./_components/colors";
import { Typefaces } from "./_components/typefaces";
import { Spaces } from "./_components/spaces";
import { Patterns } from "./_components/patterns";
import { Borders } from "./_components/borders";

export default function DesignSystemPage() {
  return (
    <Main>
      <Header />
      <Colors />
      <Typefaces />
      <Spaces />
      <Patterns />
      <Borders />
    </Main>
  );
}
