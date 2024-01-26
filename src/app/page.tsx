'use client';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  ArrowDownToLine,
  Image,
  AlignVerticalSpaceAround,
  AlignHorizontalSpaceAround,
} from 'lucide-react';
import { toPng } from 'html-to-image';
import { cn } from '@/lib/utils';
import Hero from '@/components/Hero';

export default function Home() {
  const totalBgColors = [
    'bg-gradient-to-br from-green-300 via-blue-500 to-purple-600',
    'bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500',
    'bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400',
    'bg-gradient-to-r from-gray-700 via-gray-900 to-black',
    'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
  ];
  const totalTextLayout = ['text-start', 'text-center', 'text-end'];
  const totalTitleLayout = ['justify-start', 'justify-center', 'justify-end'];

  const [bgColorIndex, setBgColorIndex] = useState(0);
  const [textLayoutIndex, setTextLayoutIndex] = useState(1);
  const [titleLayoutIndex, setTitleLayoutIndex] = useState(1);
  const [title, setTitle] = useState('Your fancy title');
  const [disableSave, setDisableSave] = useState(false);

  const handleDownloadImage = async () => {
    setDisableSave(true);
    const element = document.getElementById('print') as HTMLElement;
    console.log(element);

    toPng(element)
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'downloaded-image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDisableSave(false);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
        setDisableSave(false);
      });
  };
  const toggleBackground = () => {
    if (bgColorIndex === totalBgColors.length - 1) {
      setBgColorIndex(0);
    } else {
      setBgColorIndex(bgColorIndex + 1);
    }
  };
  const toggleTextLayout = () => {
    if (textLayoutIndex === totalTextLayout.length - 1) {
      setTextLayoutIndex(0);
    } else {
      setTextLayoutIndex(textLayoutIndex + 1);
    }
  };
  const toggleTitleLayout = () => {
    if (titleLayoutIndex === totalTitleLayout.length - 1) {
      setTitleLayoutIndex(0);
    } else {
      setTitleLayoutIndex(titleLayoutIndex + 1);
    }
  };
  return (
    <MaxWidthWrapper className="flex flex-col justify-start items-center">
      <Hero />
      <div className="flex flex-col md:flex-row justify-center items-start mt-20 md:mt-40 gap-2 md:gap-4">
        <div>
          <Label>Your title:</Label>
          <Textarea
            className="resize-none w-[392px] scrollbar-thumb-rounded scrollbar-thumb-blue scrollbar-w-2 bg-background"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            rows={4}
            value={title}
          />
        </div>
        <div>
          {/* <div id="print" className={bgColor}>
          <Textarea
            className={cn(
              'resize-none p-4 h-[784px] w-[392px] font-bold text-4xl',
              `${fontColor} bg-clip-text text-transparent`,
              textLayout
            )}
            value={title}
          />
        </div> */}
          <div
            id="print"
            className={cn(
              'flex flex-col whitespace-pre-line rounded-md p-4 min-h-[392px] w-[392px] font-bold text-4xl text-background',
              totalBgColors[bgColorIndex],
              totalTextLayout[textLayoutIndex],
              totalTitleLayout[titleLayoutIndex]
            )}
          >
            {title}
          </div>
          <div className="flex flex-row justify-between items-center w-[392px] mt-2">
            <div className="flex flex-row gap-1 justify-start items-center">
              <Button
                className="p-1"
                onClick={() => toggleBackground()}
                size="sm"
              >
                <Image />
              </Button>
              <Button
                className="p-1"
                onClick={() => toggleTextLayout()}
                size="sm"
              >
                <AlignHorizontalSpaceAround />
              </Button>
              <Button
                className="p-1"
                onClick={() => toggleTitleLayout()}
                size="sm"
              >
                <AlignVerticalSpaceAround />
              </Button>
            </div>
            <Button
              onClick={() => handleDownloadImage()}
              size="sm"
              disabled={disableSave}
            >
              <ArrowDownToLine className="h-4 w-4 mr-1" />
              {disableSave ? 'Saving' : 'Save'}
            </Button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
