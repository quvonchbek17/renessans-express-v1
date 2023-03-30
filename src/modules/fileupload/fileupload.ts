import { Request, Response, NextFunction } from "express";
import model from "./model";
import { v4 } from "uuid";
import fs from "fs";
import path from "path";

export class FileUpload {
  static async GetFile(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.params;

      fs.readFile(
        path.join(__dirname + "../../../../../files/" + name),
        (err: unknown, data) => {
          if (err) {
              res.status(404).json({
                success: false,
                message: "File not found !",
              });
            } else {
              res.sendFile(
              path.join(__dirname + "../../../../../files/" + name),
              function (err) {
                if (err) {
                  return "error"
                }
              }
            );
          }
        }
      );
    } catch (error: unknown) {
      next(error);
    }
  }



  static async Upload(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      let file;

      try {
        file = (req as any).files.file;
      } catch (err) {
        res.status(400).json({
          success: false,
          message: "File yuklang !!",
        });
        return;
      }

      let size: string = "";

      if (file) {
        Math.floor(file.size / (1024 * 1024)) > 0
          ? (size = (file.size / (1024 * 1024)).toFixed(2) + " MB")
          : (size = (file.size / 1024).toFixed(2) + " KB");
      } else {
        res.status(400).json({
          success: false,
          message: "File yuklang !!",
        });
        return;
      }

      let fileName = v4() + "." + file.name.split(".").at(-1);

      const newFile = new model({
        name: file.name,
        uploadName: fileName,
        size: size,
        type: file.mimetype,
        url: "https://api-renessans.mquvonchbek.uz/api/v1/files/" + fileName,
      });

      await newFile.save();

      await file.mv(
        path.join(__dirname + "../../../../../files/" + fileName),
        (err: unknown) => {
          if (err) throw err;
        }
      );

      res.status(200).json({
        success: true,
        url: newFile.url,
      });
    } catch (error) {
      next(error);
    }
  }

  static async DeleteFile(fileName: string): Promise<string> {
    try {
      const deleted = await model.findOneAndDelete({ uploadName: fileName });

      fs.unlink(
        path.join(__dirname + "../../../../../files/" + fileName),
        (err) => {
          if (err) {
            return "error"
          }
        }
      );

      return "ok";
    } catch (error) {
      return "error";
    }
  }
}
