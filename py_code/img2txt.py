import cv2
import pytesseract
#pytesseract.pytesseract.tesseract_cmd = r'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'
#pytesseract.pytesseract.tesseract_cmd = 'C:\\Program Files (x86)\\Tesseract-OCR\\tesseract.exe'
#pytesseract.pytesseract.tesseract_cmd = r'C:\Users\User\AppData\Local\Tesseract-OCR\tesseract.exe'
#pytesseract.pytesseract.tesseract_cmd =r'/home/nazmul/.cache/pip/wheels/5e/48/64/518a6780b56aee06efa310fb23eaa144405b96429d13204e1e'
img = cv2.imread('cart2.png')
text = pytesseract.image_to_string(img)

print(text)

"""img = cv2.imread('./BitCoin.jpeg')
text = pytesseract.image_to_string(img)
print(text)"""

