import Header from "@/components/Header";
import TransformationForm from "@/components/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async({params: { type }}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  const { userId } = auth();

  const user = await getUserById(typeof userId === "string" ? userId : redirect("/sign-in"))

  return (
    <div>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <TransformationForm action="Add" userId={user._id} type={transformation.type as TransformationTypeKey} creditBalance={user.creditBalance}/>
    </div>
  );
};

export default AddTransformationTypePage;
