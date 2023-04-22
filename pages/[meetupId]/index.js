import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      title="This is the Title"
      address="This is my Address"
      description="This is the description for hte event"
    />
  );
};
export async function getStaticPaths() {
  return {
    fallback: false, //if true, it will generate the page on the fly if it is not found
    paths: [
      { params: { meetupId: "m1" } },
      { params: { meetupId: "m2" } },
    ],
  };
}


//must be named getStaticProps
export async function getStaticProps(context) {
  // fetch data from an API before loading the component (on the server)
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetups: {
        image:
          "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: meetupId,
        title: "This is the Title",
        address: "This is my Address",
        description: "This is the description for hte event",
      },
    },
    revalidate: 5, //regenerate the page every 1 second to ensure that the page is always up to date
  };
}

export default MeetupDetails;
