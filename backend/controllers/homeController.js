import HomeModel from "../models/HomeModel.js";

export const getHome = async (req, res) => { 
 try {

  const homeData = await HomeModel.findOne();

  if (!homeData) {
    return res.json({
      success: false,
      message: "no home data"
    });
  }

  return res.json({
    success: true,
    message: "Fetch data",
    data: homeData
  });

 } catch (error) {
  return res.json({
    success: false,
    message: "Server error"
  });
 }
}
export const updateHome = async (req, res) => {
 const { title,about } = req.body;
 const image = req.file ? req.file.filename : undefined;

 try {

    let Home = await HomeModel.findOne();

    if (!Home) {
        Home = new HomeModel({
            title,
            about,
            image
        });
    } 
    else {
        if (title !== undefined) Home.title = title;
        if (about !== undefined) Home.about = about;
        if (image !== undefined) Home.image = image;
    }

    await Home.save();

    return res.json({
        success: true,
        message: "Update Successful",
        data: Home
    });

 } catch (error) {
    return res.json({
        success: false,
        message: "Server error"
    });
 }
}