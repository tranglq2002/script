let docs = db.privileges_brands.find().sort({ priority: 1 }).toArray();
docs.forEach((doc, index) => {
  db.privileges_brands.updateOne(
    { _id: doc._id },
    { $set: { priority: (index + 2) * 5 } } // Gán lại priority cách nhau 5 đơn vị
  );
});
