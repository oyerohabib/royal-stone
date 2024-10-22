import { Navbar, Footer, Banner } from "@/components/ui";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <section className="px-4 md:px-12 xl:px-24 py-12 bg-secondary-green text-left">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl md:text-3xl xl:text-[40px] font-extrabold">
            Privacy Policy
          </h1>
          <h3 className="mb-5">Updated Last: 30th September 2024</h3>
          <div className="md:text-md xl:text-lg text-light-black max-w-6xl !leading-8 md:!leading-[44px]">
            <p>
              Elit at et amet dis. Tortor in lacus eget purus at malesuada nibh
              scelerisque. Eu in neque vitae aenean. Commodo maecenas placerat
              consectetur diam leo. Tristique porttitor nec tristique est varius
              felis. Ligula donec fames auctor leo pretium lectus. Pulvinar non
              enim nisi cursus dictum enim sagittis nunc a. A interdum dolor
              aliquet lacus sagittis. Nisl vestibulum pretium id condimentum at
              quam vitae eros sed. Sit eget quam mattis sapien massa. Et quisque
              morbi erat tellus donec urna lorem tellus. In pharetra commodo
              velit tincidunt. Laoreet consequat diam quis lectus lectus turpis
              vitae tortor faucibus. Odio quis eleifend vehicula porttitor vitae
              sit.{" "}
            </p>{" "}
            <br />
            <p>
              Ac phasellus arcu suspendisse dolor cras morbi sed magnis. Mattis
              rutrum eu in neque velit sed. Tellus fringilla iaculis commodo
              penatibus. Eget purus interdum pulvinar sagittis vel. Ut volutpat
              egestas at pretium maecenas. Aliquet dignissim pretium interdum
              dui nec eu. Cursus malesuada sapien ipsum egestas orci erat quis.
              Sollicitudin sit tempor mauris pellentesque et cras.{" "}
            </p>
            <br />
            <p>
              Aenean netus vitae at ac nunc interdum magna. Enim proin
              condimentum odio eget turpis laoreet massa mollis. A senectus
              bibendum auctor venenatis dolor nunc. Nulla venenatis ut
              sollicitudin egestas neque faucibus faucibus aliquam. Euismod
              sollicitudin consequat enim eget arcu. Venenatis cras integer
              purus commodo. Vel etiam eget pulvinar vel pellentesque tortor
              sagittis.{" "}
            </p>
            <br />
            <p>
              Ligula sed vel ultrices lectus non non varius potenti eget. Ac
              lorem rhoncus amet amet tempus duis et massa. Commodo accumsan
              ipsum lectus fringilla quis. Odio sit hendrerit sed nullam
              pharetra eu diam arcu amet. Sem mi dolor orci sit lacinia id
              varius in. Eget curabitur ut lectus enim egestas enim a. Rutrum
              nullam quam elementum ut tortor vulputate duis nunc lectus.
              Hendrerit volutpat hac phasellus fringilla in feugiat. A facilisis
              consequat natoque nunc ipsum sit molestie. Nulla massa tristique
              tempus id sed. Magna ut hac penatibus etiam ligula lacus
              pellentesque vehicula. Sagittis iaculis non aliquam sit nisl enim
              turpis arcu et.{" "}
            </p>
            <br />
            <p>
              Velit commodo habitant at eros risus accumsan nulla tellus
              iaculis. Lacinia sit nulla ultricies consequat gravida lacus
              feugiat in leo. Arcu est ornare aenean ut vitae libero. Lorem
              pretium rhoncus volutpat posuere quis. A diam tortor placerat in
              dignissim ullamcorper velit ut quis. Nisi blandit suspendisse eget
              tortor nunc elementum. Est.
            </p>
          </div>
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  );
}
