import { Main } from "@/app/components/layout/main";
import { Header } from "./_components/header";
import { Colors } from "./_components/colors";
import { Typefaces } from "./_components/typefaces";

export default function SystemDesignPage() {
  return (
    <Main>
      <Header />
      <Colors />
      <Typefaces />
    </Main>
  );
}
