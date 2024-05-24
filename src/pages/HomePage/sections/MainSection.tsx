import Card from "@/components/Card";
import ContainerWrapper from "@/components/ContainerWrapper";

const recipes = [
  {
    title: "Macarrão Carbonara",
    imageUrl: "/images/carbonara.png",
    description: "Delicioso macarrão com molho cremoso e pedaços de bacon.",
    tags: ["#italiana", "#massa", "#jantar"],
  },
  {
    title: "Frango Assado",
    imageUrl: "/images/frango_assado.png",
    description:
      "Frango temperado e assado, perfeito para um almoço em família.",
    tags: ["#aves", "#assado", "#almoço"],
  },
  {
    title: "Torta de Limão",
    imageUrl: "/images/torta_limao.png",
    description: "Sobremesa refrescante com sabor intenso de limão.",
    tags: ["#sobremesa", "#doce", "#limão"],
  },
  {
    title: "Salada Caesar",
    imageUrl: "/images/salada_caesar.png",
    description:
      "Salada clássica com molho caesar, croutons e queijo parmesão.",
    tags: ["#salada", "#leve", "#jantar"],
  },
  {
    title: "Bolo de Chocolate",
    imageUrl: "/images/bolo_chocolate.png",
    description: "Bolo macio e úmido com cobertura de chocolate.",
    tags: ["#sobremesa", "#doce", "#chocolate"],
  },
  {
    title: "Sopa de Legumes",
    imageUrl: "/images/sopa_legumes.png",
    description: "Sopa nutritiva e reconfortante com uma variedade de legumes.",
    tags: ["#sopa", "#saudável", "#vegano"],
  },
];

const MainSection = () => {
  return (
    <ContainerWrapper className="relative flex flex-col  m-auto">
      <h1 className="text-4xl font-semibold text-start text-color-apple-logo lg:text-5xl">
        Receitas
      </h1>
      <p className="text-gray-700 text-start mt-4">
        Aqui você encontra uma seleção das melhores receitas para preparar em
        casa, desde pratos simples e rápidos até refeições sofisticadas e
        elaboradas. Aproveite e descubra novos sabores e técnicas que vão
        transformar sua cozinha em um verdadeiro restaurante!
      </p>
      <div className="grid grid-cols-1 gap-6 mt-12 lg:grid-cols-3 lg:gap-12">
        {recipes.map((recipe, index) => (
          <Card
            key={index}
            title={recipe.title}
            imageUrl={recipe.imageUrl}
            description={recipe.description}
            tags={recipe.tags}
          />
        ))}
      </div>
    </ContainerWrapper>
  );
};

export default MainSection;
