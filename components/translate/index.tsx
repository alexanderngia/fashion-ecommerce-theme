import { useRouter } from "next/router";
const Translate = () => {
  const router = useRouter();

  const changeLang = (lang: string) => {
    router.push("/", "/", { locale: lang });
  };
  return (
    <div>
      <button onClick={() => changeLang("vi")}>vi</button>
      <button onClick={() => changeLang("en")}>en</button>
    </div>
  );
};

export default Translate;
